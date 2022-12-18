import type { CodegenConfig } from '@graphql-codegen/cli';
import { DateTypeDefinition } from 'graphql-scalars';

const config: CodegenConfig = {
  overwrite: true,
  schema: [DateTypeDefinition, './src/schema.graphql.ts'],
  generates: {
    'src/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};

export default config;
