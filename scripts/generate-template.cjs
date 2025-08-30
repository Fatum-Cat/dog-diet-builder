/**
 * scripts/generate-template.cjs
 * Tworzy pusty szablon Excela z 6 arkuszami i kompletem kolumn + kolumna `forced`.
 * Uruchom lokalnie:  node scripts/generate-template.cjs
 */
const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

const OUT_DIR = path.join(process.cwd(), 'public', 'data');
const OUT_FILE = path.join(OUT_DIR, 'ingredients template.xlsx');

const SHEETS = ['Meat','Grains','Vegetables','Oils','Fruits','Mixed'];

// Dokładnie takie nagłówki jak chciałaś + `forced` na końcu:
const HEADERS = [
  'Ingredients',
  'amounts mixed  as fresh weight (g)',
  'Water in food,%',
  'amounts mixed on DM bassis (g)',
  'kcal',
  'Protein',
  'fat',
  'Ash',
  'CHO',
  'Fiber',
  'Ca',
  'Iron',
  'Mg',
  'P',
  'K',
  'Na',
  'Zn',
  'Cu',
  'Iodine',
  'Se',
  'Thiamin',
  'Riboflavin',
  'Niacin',
  'Pantothenic acid',
  'B-6',
  'Folate',
  'Choline',
  'B-12',
  'Vitamin A',
  'Vitamin E',
  'Vitamin D',
  '18:2',
  '18:03',
  'EPA',
  'DHA',
  'Tryptophan',
  'Threonine',
  'Isoleucine',
  'Leucine',
  'Lysine',
  'Methionine',
  'Cystine',
  'Phenylalanine',
  'Tyrosine',
  'Valine',
  'Arginine',
  'forced' // <— nowa kolumna na końcu
];

// Utwórz pusty skoroszyt i wypełnij arkusze
const wb = xlsx.utils.book_new();

for (const name of SHEETS) {
  const rows = [HEADERS, ...Array.from({length: 50}, () => Array(HEADERS.length).fill(''))];
  const ws = xlsx.utils.aoa_to_sheet(rows);
  xlsx.utils.book_append_sheet(wb, ws, name);
}

// Zapis
fs.mkdirSync(OUT_DIR, { recursive: true });
xlsx.writeFile(wb, OUT_FILE);

console.log('✔ Stworzono plik:', OUT_FILE);
console.log('   Arkusze:', SHEETS.join(', '));
console.log('   Kolumny:', HEADERS.length);
console.log('Użyj kolumny `forced` = 1/yes/true aby wymusić dodanie składnika.');
