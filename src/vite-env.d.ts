/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_ADMIN_API_BASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
