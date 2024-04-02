# WordPress-Laravel-Vite Theme

The WordPress-Laravel-Vite theme presents a structured framework integrating Laravel Vite, designed to streamline the development process. This setup automatically retrieves asset files from WordPress blocks and Elementor widgets, utilizing them as inputs to generate distinct outputs. Through this implementation, the theme facilitates efficient asset management and optimizes the development workflow for WordPress projects.

For illustrative purposes, this setup incorporates the Hello Elementor theme and its child theme. However, it's essential to note that this configuration is adaptable and can be tailored to any theme as per specific project requirements. This flexibility ensures seamless integration with various WordPress themes, allowing for customized implementations to meet diverse design and functionality needs.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)

## Installation

1. **Clone the repository:**

   ```bash
   with ssh:
   git clone git@github.com:jenishshrestha/Wordpress-Laravel-Vite.git

   # or

   with HTTPS:
   git clone https://github.com/jenishshrestha/Wordpress-Laravel-Vite.git
   ```

2. **Navigate to the theme directory:**

   ```bash
   cd Wordpress-Laravel-Vite\wp-content\themes\hello-theme-child\
   ```

3. **Install dependencies:**
   ```bash
   yarn
   ```

## Usage

```bash
yarn dev
```

Vite server will run at http://localhost:2222.

You can access your project in the customary manner by navigating to its designated URL, such as http://projectname.local or http://localhost/projectname

## Technologies

- Vite
- Laravel Vite Plugin
- Husky
- Tailwind CSS
- Elementor

## Reference

[https://gist.github.com/chrispage1/06ac44ac3c01ab0454a935d50b8c9282]
