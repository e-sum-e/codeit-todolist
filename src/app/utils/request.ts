const baseUrl = `https://assignment-todolist-api.vercel.app/api/e-sum-e`;

export enum HTTPMethods {
  "GET" = "GET",
  "POST" = "POST",
  "PATCH" = "PATCH",
  "DELETE" = "DELETE",
}

export enum HTTPHeaders {
  "JSON" = "JSON",
  "FormData" = "FormData",
}

export const request = async (
  url: string,
  method: HTTPMethods,
  headers?: HTTPHeaders,
  body?: BodyInit
) => {
  const response = await fetch(`${baseUrl}${url}`, {
    method,
    headers:
      headers === HTTPHeaders.JSON
        ? {
            "Content-Type": "application/json",
          }
        : undefined,
    body,
  });

  return response;
};
