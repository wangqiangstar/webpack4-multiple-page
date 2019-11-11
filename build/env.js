import path from "path";

export const { NODE_ENV, BUNDLE_ANNALYZE } = process.env;

export const isDevelopment = NODE_ENV === "development";

export const isProduction = NODE_ENV === "production";

export const shouldUseSourceMap = true;

export const PORT = process.env.port || 8083;

export const MOCKPORT = process.env.port || 9083;

export const PROTOCOL = process.env.HTTPS === 'true' ? 'https' : 'http';

export const HOST = "0.0.0.0";

export const appPath = path.join(process.cwd(), "./src");

export const isBundleAnalyze = BUNDLE_ANNALYZE === "analyze";