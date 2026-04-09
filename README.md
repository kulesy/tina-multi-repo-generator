# Tina Multi-Repo Generator

This repository contains the TinaCMS schema configuration for a multi-repo setup.

## Purpose

In a multi-repo setup:
- **This repo (generator)**: Contains the Tina schema and configuration
- **Content repo**: Contains the actual markdown content files

## Schema

The schema defines a `posts` collection with the following fields:
- `title` (string, required)
- `date` (datetime, required)
- `author` (string)
- `body` (rich-text)

## Usage

```bash
# Install dependencies
npm install

# Build the schema
npm run build
```

## Multi-Repo Architecture

This is a test repository for PR #3368 in tinacloud, which implements multi-repo support where:
1. Schema is fetched from the generator repo's main branch
2. Content is cloned and indexed from the content repo
3. The generator's main branch schema is the source of truth for all content branches
