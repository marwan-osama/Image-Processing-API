
# Image Processing API

A REST API that serve and process images with on-demand sizes with caching functionality.

## Tech-stack

The API was built using Express, Sharp (image processing), and Jasmine (unit testing).


## API Reference

#### Get image

```http
GET /api/images?fileName=${imgName}&width=${imgWidth}&height=${imgHeight}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `fileName`      | `string` | **Required**. name of image to fetch |
| `width`         | `number` | **Required**. width of image to fetch |
| `height`         | `number` | **Required**. height of image to fetch |



## Scripts

**Running Tests:**
To run tests, run the following command

```bash
  npm run test
```

**Starting the server:**
To start the server, run the following command

```bash
  npm run start
```

**Building TS to JS:**
To build TypeScript to JavaScript, run the following command

```bash
  npm run build
```
