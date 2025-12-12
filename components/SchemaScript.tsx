import React from "react";

interface SchemaScriptProps {
  schema: object | object[];
}

/**
 * Component to inject JSON-LD structured data into the page
 * Supports single schema object or array of schema objects
 */
export function SchemaScript({ schema }: SchemaScriptProps) {
  const schemaArray = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemaArray.map((schemaItem, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaItem, null, 0),
          }}
        />
      ))}
    </>
  );
}
