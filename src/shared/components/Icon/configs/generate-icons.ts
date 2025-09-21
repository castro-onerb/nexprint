import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseSVGContent, convertParsedSVG } from '@iconify/utils';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = path.resolve(__dirname, '../svg');
const outputDir = path.resolve(__dirname, '../json');

// Garante que a pasta existe, mas limpa antes
fs.ensureDirSync(outputDir);
fs.emptyDirSync(outputDir);

const files = fs.readdirSync(iconsDir).filter((f) => f.endsWith('.svg'));

files.forEach((file) => {
  const name = path.basename(file, '.svg');
  const svgPath = path.join(iconsDir, file);
  const svgContent = fs.readFileSync(svgPath, 'utf-8');

  // Passo 1: Parse SVG
  const parsed = parseSVGContent(svgContent);

  if (!parsed) {
    console.warn(`⚠️ Erro ao parsear SVG: ${file}`);
    return;
  }

  // Passo 2: Converter para Iconify JSON
  const iconJSON = convertParsedSVG(parsed);

  // Salvar JSON
  const jsonFile = path.join(outputDir, `${name}.json`);
  fs.writeFileSync(jsonFile, JSON.stringify(iconJSON, null, 2));
  console.log(`✅ Gerado: ${jsonFile}`);
});

console.log('✨ Todos os ícones foram processados!');
