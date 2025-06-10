export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    Error.captureStackTrace?.(this, ApiError);
    this.name = "ApiError";
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  // if (process.env.NODE_ENV === "development") {
  //   console.debug("API Response", response);
  // }

  if (response.ok) {
    // Handle cases with no content
    if (
      response.status === 204 ||
      response.headers.get("Content-Length") === "0"
    ) {
      return {} as T;
    }

    try {
      return (await response.json()) as T;
    } catch {
      console.warn("Failed to parse JSON response");
      return {} as T;
    }
  } else {
    const errorText = await response.text();
    // if (process.env.NODE_ENV === "development") {
    //   console.error("API Error", response.status, errorText);
    // }
    throw new ApiError(
      response.status,
      errorText || "An unknown error occurred",
    );
  }
}

async function customFetch<T>(
  url: string,
  method: string,
  body?: object | FormData,
  options?: RequestInit,
): Promise<T> {
  const isFormData = body instanceof FormData;

  const response = await fetch(url, {
    ...options,
    method,
    headers: {
      ...(isFormData
        ? options?.headers
        : {
            "Content-Type": "application/json",
            ...options?.headers,
          }),
    },
    body: isFormData ? body : body ? JSON.stringify(body) : undefined,
  });

  return handleResponse<T>(response);
}

export const api = {
  get: async <T>(url: string, options?: RequestInit): Promise<T> =>
    customFetch<T>(url, "GET", undefined, options),

  post: async <Res, Req extends object | FormData>(
    url: string,
    body: Req,
    options?: RequestInit,
  ): Promise<Res> => customFetch<Res>(url, "POST", body, options),

  put: async <Res, Req extends object | FormData>(
    url: string,
    body: Req,
    options?: RequestInit,
  ): Promise<Res> => customFetch<Res>(url, "PUT", body, options),

  patch: async <Res, Req extends object | FormData>(
    url: string,
    body: Req,
    options?: RequestInit,
  ): Promise<Res> => customFetch<Res>(url, "PATCH", body, options),

  delete: async <T>(url: string, options?: RequestInit): Promise<T> =>
    customFetch<T>(url, "DELETE", undefined, options),
};
