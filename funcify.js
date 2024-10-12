const funcify = async (srcFile, _argNames) => {
  const startMarker =
    /Start marker\n/;
  const endMarker =
    /End marker\n/;
  const decoder = new TextDecoder('utf-8');
  const text = await Deno.readFile(srcFile);

  const code = decoder.decode(text);
  const [_, newCode] = code.split(startMarker);
  const [requiredCode, _a] = newCode.split(endMarker);
  await Deno.writeTextFileSync(
    `parsed.js`,
    `export default ${requiredCode}`
  );
};

export default funcify;
