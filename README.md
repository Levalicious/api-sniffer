<p align="center">
  <img width="120" src="https://user-images.githubusercontent.com/9282806/68468334-1a2f4e80-0218-11ea-941e-e6075adb2587.png" alt="API Sniffer Logo" />
</p>

# API Sniffer ![Badge](https://github.com/Levalicious/api-sniffer/workflows/build/badge.svg) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=stefancosquer_api-sniffer&metric=alert_status)](https://sonarcloud.io/dashboard?id=stefancosquer_api-sniffer)

API Sniffer is a simple tool to trace API calls between 2 backends.

All you need is to deploy API Sniffer and route all API calls you want to trace through it.

## Running

### Locally

Use the package manager [npm](https://nodejs.org) to install dependencies.

```bash
$ npm i
$ npm run build
$ npm run start
```

### With Docker

```bash
$ docker build -t api-sniffer .
$ docker run -p 8080:8080 -ti --rm api-sniffer
```
Or with Docker Compose
```bash
$ docker-compose up
```

### App Engine

```bash
$ gcloud init
$ gcloud app deploy
```

## Usage

### Tracing API calls 

In order to trace API calls, you need to route them trought the embedded proxy.

To proxify a call, change the API URL as follows:

Original URL
```http request
https://example.com/api/v1/endpoint
```

Proxified URL 
```http request
http://localhost:8080/proxy/example.com/api/v1/endpoint
```

### Viewing API calls

Open http://localhost:8080 to view the app in the browser.

The exchanges list will be refreshed in realtime as API calls go through API Sniffer. 

![Screenshot](https://user-images.githubusercontent.com/9282806/68213786-7d34a180-ffdc-11e9-8504-d829d4e6cdc5.png)


## Development

To run the development server with live reloading

```bash
$ npm run dev
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
