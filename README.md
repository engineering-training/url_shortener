<a name="readme-top"></a>

<br />

<h3 align="center">URL Shortener</h3>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

This is the first, of hopefully many projects, that will improve my skills with the technologies listed below.
This project should introduce us into simple document-based noSQL databases.
This application will take a long original URL, store it in our mongoDB database using Phasma and then generate a new, short URL that can be used instead of the original URL.




### Built With

* React
* Next
* Prisma
* Vercel
* NPM

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/engineering-training/url-shortener.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the application
   ```sh
   yarn dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

API routes can be accessed on [http://localhost:3000/api/shorten-url](http://localhost:3000/api/shorten-url). This endpoint can be edited in `pages/services/handler.ts`. 


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
