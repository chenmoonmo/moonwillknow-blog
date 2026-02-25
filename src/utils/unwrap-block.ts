import type { Block } from "notion-types";

export const unwrapBlock = (input: unknown): Block | null => {
  const maybeWrapped = input as { value?: unknown } | null | undefined;
  const candidate = maybeWrapped?.value ?? input;

  if (!candidate || typeof candidate !== "object") return null;
  if (!("id" in candidate) || !("type" in candidate)) return null;

  return candidate as Block;
};

