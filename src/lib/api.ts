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
  if (response.ok) {
    // Handle cases with no content
    if (
      response.status === 204 ||
      response.headers.get("Content-Length") === "0"
    ) {
      return {} as T;
    }
    return response.json() as T;
  } else {
    const errorText = await response.text();
    throw new ApiError(
      response.status,
      errorText || "An unknown error occurred",
    );
  }
}

export const api = {
  get: async <T>(url: string, options?: RequestInit): Promise<T> => {
    const response = await fetch(url, { ...options, method: "GET" });
    return handleResponse<T>(response);
  },
  post: async <Res, Req extends object>(
    url: string,
    body: Req,
    options?: RequestInit,
  ): Promise<Res> => {
    const response = await fetch(url, {
      ...options,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      body: JSON.stringify(body),
    });
    return handleResponse<Res>(response);
  },
  put: async <Res, Req extends object>(
    url: string,
    body: Req,
    options?: RequestInit,
  ): Promise<Res> => {
    const response = await fetch(url, {
      ...options,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      body: JSON.stringify(body),
    });
    return handleResponse<Res>(response);
  },
  patch: async <Res, Req extends object>(
    url: string,
    body: Req,
    options?: RequestInit,
  ): Promise<Res> => {
    const response = await fetch(url, {
      ...options,
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      body: JSON.stringify(body),
    });
    return handleResponse<Res>(response);
  },
  delete: async <T>(url: string, options?: RequestInit): Promise<T> => {
    const response = await fetch(url, {
      ...options,
      method: "DELETE",
      headers: {
        ...(options?.headers || {}),
      },
    });
    return handleResponse<T>(response);
  },
};
