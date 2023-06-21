# Goal of this POC

This poc is here to add a sample code to use the (openapi-generator)[https://github.com/OpenAPITools/openapi-generator]
This mostly to try the `null` api property handling

## First terminal

```sh
$ npm install
$ npm run start
```

## Second terminal

You need to start the nest app, because we getting the `swagger` file definition, through the `http://localhost:3000/api-json`

```sh
$ npm run codegen
```

If you want to know if the null is handled, you must go to `generated-angular-code/model/exampleView.ts`

```typescript
// generated code with `openapi-generator`
export interface ExampleView {
  name: string;
  status: ExampleEnum;
  tags: Array<string> | null; // null is handled ! 🙌🙌
  date: string;
}
```
