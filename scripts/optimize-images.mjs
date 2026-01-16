#!/usr/bin/env node
/**
 * Image optimization script for homepage performance
 * Converts large PNG/JPEG images to optimized WebP format
 */

import sharp from 'sharp';
import { mkdir, copyFile } from 'fs/promises';
import { existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = join(__dirname, '../apps/next-app/public/benzenith/assets');
const BACKUP_DIR = join(ASSETS_DIR, 'original');

// Image optimization configurations
const images = [
  {
    input: 'image-14.png',
    output: 'hero-banner.webp',
    width: 1920,
    quality: 85,
    description: 'Hero banner (19.7MB -> ~150KB)'
  },
  {
    input: 'image-14.png',
    output: 'hero-banner-mobile.webp',
    width: 1080,
    quality: 80,
    description: 'Hero banner mobile (19.7MB -> ~50KB)'
  },
  {
    input: 'series-suixinshan.jpeg',
    output: 'series-suixinshan.webp',
    width: 800,
    quality: 82,
    description: 'Series Suixinshan (3.1MB -> ~80KB)'
  },
  {
    input: 'series-benzizai.jpeg',
    output: 'series-benzizai.webp',
    width: 800,
    quality: 82,
    description: 'Series Benzizai (1.5MB -> ~60KB)'
  },
  {
    input: 'series-tingwanxiang.jpg',
    output: 'series-tingwanxiang.webp',
    width: 800,
    quality: 82,
    description: 'Series Tingwanxiang (1.7MB -> ~70KB)'
  }
];

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...\n');

  // Create backup directory
  if (!existsSync(BACKUP_DIR)) {
    await mkdir(BACKUP_DIR, { recursive: true });
    console.log('📁 Created backup directory:', BACKUP_DIR);
  }

  for (const img of images) {
    const inputPath = join(ASSETS_DIR, img.input);
    const outputPath = join(ASSETS_DIR, img.output);
    const backupPath = join(BACKUP_DIR, img.input);

    if (!existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${img.input} - file not found`);
      continue;
    }

    try {
      // Backup original file
      if (!existsSync(backupPath)) {
        await copyFile(inputPath, backupPath);
        console.log(`📦 Backed up: ${img.input}`);
      }

      // Get original file info
      const metadata = await sharp(inputPath).metadata();

      // Optimize and convert to WebP
      const result = await sharp(inputPath)
        .resize(img.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: img.quality })
        .toFile(outputPath);

      const originalSize = (metadata.size / 1024 / 1024).toFixed(2);
      const newSize = (result.size / 1024).toFixed(0);
      const reduction = ((1 - result.size / metadata.size) * 100).toFixed(1);

      console.log(`✅ ${img.description}`);
      console.log(`   ${img.input} (${originalSize}MB) -> ${img.output} (${newSize}KB)`);
      console.log(`   Reduction: ${reduction}%\n`);
    } catch (error) {
      console.error(`❌ Error processing ${img.input}:`, error.message);
    }
  }

  console.log('🎉 Image optimization complete!');
  console.log('\nNext steps:');
  console.log('1. Update image paths in page.tsx');
  console.log('2. Add preload tags in layout.tsx');
  console.log('3. Test the optimized images visually');
}

optimizeImages().catch(console.error);
