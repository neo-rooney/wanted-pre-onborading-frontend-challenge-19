import fs from "fs/promises";
import path from "path";

const tokensFilePath = path.resolve("src/styles/designTokens/tokens.json");
const scssOutputPath = path.resolve("src/styles/designTokens/tokens.scss");

// 폰트 가중치 매핑
const fontWeightMappings = {
  "Extra Bold": 800,
  "Semi Bold": 600,
  Medium: 500,
  Regular: 400,
};

async function convertTokens() {
  try {
    const data = await fs.readFile(tokensFilePath, "utf8");
    const tokens = JSON.parse(data);
    let scssContent = "";

    Object.entries(tokens.global).forEach(([key, value]) => {
      if (value.type === "typography") {
        scssContent += `@mixin ${key} {\n`;
        Object.entries(value.value).forEach(([styleKey, styleValue]) => {
          const styleName = styleKey.replace(
            /[A-Z]/g,
            (m) => `-${m.toLowerCase()}`
          );
          let resolvedValue = resolveTokenValue(
            styleValue,
            tokens.global,
            fontWeightMappings
          );

          // fontSize와 lineHeights에 'px' 단위 추가
          if (styleKey === "fontSize" || styleKey === "lineHeight") {
            resolvedValue += "px";
          }

          scssContent += `  ${styleName}: ${resolvedValue};\n`;
        });
        scssContent += "}\n\n";
      } else {
        Object.entries(value).forEach(([item, { value: itemValue }]) => {
          if (itemValue !== undefined) {
            const variableName = `$${key.toLowerCase()}-${item.replace(
              /[^a-zA-Z0-9]/g,
              "-"
            )}`;
            let finalValue = itemValue;

            if (key === "fontWeights") {
              finalValue = fontWeightMappings[itemValue] || itemValue;
            }

            // fontSize와 lineHeights에 'px' 단위 추가
            if (key === "fontSize" || key === "lineHeights") {
              finalValue += "px";
            }

            scssContent += `${variableName}: ${finalValue};\n`;
          }
        });
      }
    });

    await fs.writeFile(scssOutputPath, scssContent, "utf8");
    console.log("SCSS file was successfully generated.");
  } catch (err) {
    console.error("Error processing the design tokens:", err);
  }
}

function resolveTokenValue(value, tokens, mappings) {
  if (typeof value === "string" && value.startsWith("{")) {
    const refPath = value.slice(1, -1).split(".");
    let resolvedValue = tokens;
    refPath.forEach((part) => {
      resolvedValue = resolvedValue && resolvedValue[part];
    });
    if (resolvedValue) {
      // 폰트 가중치 값을 숫자로 매핑
      return mappings[resolvedValue.value] || resolvedValue.value;
    }
  }
  return value;
}

convertTokens();
