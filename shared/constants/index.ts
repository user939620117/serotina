// API endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LOGOUT: '/api/auth/logout',
    REFRESH: '/api/auth/refresh',
    VERIFY_EMAIL: '/api/auth/verify-email',
    FORGOT_PASSWORD: '/api/auth/forgot-password',
    RESET_PASSWORD: '/api/auth/reset-password',
  },
  USERS: {
    PROFILE: '/api/users/profile',
    UPDATE_PROFILE: '/api/users/profile',
    ADDRESSES: '/api/users/addresses',
    PAYMENT_METHODS: '/api/users/payment-methods',
  },
  PRODUCTS: {
    LIST: '/api/products',
    DETAILS: '/api/products/:id',
    CATEGORIES: '/api/products/categories',
    SEARCH: '/api/products/search',
    REVIEWS: '/api/products/:id/reviews',
  },
  CART: {
    GET: '/api/cart',
    ADD_ITEM: '/api/cart/items',
    UPDATE_ITEM: '/api/cart/items/:id',
    REMOVE_ITEM: '/api/cart/items/:id',
    CLEAR: '/api/cart/clear',
  },
  ORDERS: {
    LIST: '/api/orders',
    CREATE: '/api/orders',
    DETAILS: '/api/orders/:id',
    CANCEL: '/api/orders/:id/cancel',
    TRACK: '/api/orders/:id/track',
  },
  PAYMENTS: {
    CREATE_INTENT: '/api/payments/create-intent',
    WEBHOOK: '/api/payments/webhook',
    METHODS: '/api/payments/methods',
  },
} as const;

// Status codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
} as const;

// Validation constants
export const VALIDATION = {
  PASSWORD_MIN_LENGTH: 8,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
  EMAIL_MAX_LENGTH: 255,
  DESCRIPTION_MAX_LENGTH: 2000,
  PRODUCT_NAME_MAX_LENGTH: 100,
  CATEGORY_NAME_MAX_LENGTH: 50,
  SKU_LENGTH: 12,
  PHONE_MIN_LENGTH: 10,
  PHONE_MAX_LENGTH: 15,
  ADDRESS_MAX_LENGTH: 255,
  POSTAL_CODE_MAX_LENGTH: 10,
} as const;

// File upload constants
export const FILE_UPLOAD = {
  MAX_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  MAX_IMAGES_PER_PRODUCT: 5,
} as const;

// Pagination constants
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
} as const;

// Cache durations (in seconds)
export const CACHE_DURATION = {
  SHORT: 5 * 60, // 5 minutes
  MEDIUM: 30 * 60, // 30 minutes
  LONG: 2 * 60 * 60, // 2 hours
  VERY_LONG: 24 * 60 * 60, // 24 hours
} as const;

// Rate limiting
export const RATE_LIMITS = {
  LOGIN: {
    WINDOW_MS: 15 * 60 * 1000, // 15 minutes
    MAX_ATTEMPTS: 5,
  },
  REGISTER: {
    WINDOW_MS: 60 * 60 * 1000, // 1 hour
    MAX_ATTEMPTS: 3,
  },
  GENERAL: {
    WINDOW_MS: 15 * 60 * 1000, // 15 minutes
    MAX_REQUESTS: 100,
  },
} as const;

// Error messages
export const ERROR_MESSAGES = {
  INVALID_CREDENTIALS: 'Invalid email or password',
  EMAIL_ALREADY_EXISTS: 'Email already exists',
  USER_NOT_FOUND: 'User not found',
  PRODUCT_NOT_FOUND: 'Product not found',
  INSUFFICIENT_STOCK: 'Insufficient stock',
  PAYMENT_FAILED: 'Payment failed',
  ORDER_NOT_FOUND: 'Order not found',
  UNAUTHORIZED: 'Unauthorized access',
  FORBIDDEN: 'Access forbidden',
  SERVER_ERROR: 'Internal server error',
  VALIDATION_ERROR: 'Validation error',
  RATE_LIMIT_EXCEEDED: 'Too many requests',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  USER_REGISTERED: 'User registered successfully',
  EMAIL_VERIFIED: 'Email verified successfully',
  PASSWORD_RESET: 'Password reset successfully',
  PROFILE_UPDATED: 'Profile updated successfully',
  PRODUCT_ADDED: 'Product added successfully',
  ORDER_PLACED: 'Order placed successfully',
  PAYMENT_SUCCESSFUL: 'Payment processed successfully',
} as const;

// Regular expressions
export const REGEX_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[\+]?[1-9][\d]{0,15}$/,
  POSTAL_CODE: /^[A-Za-z0-9\s\-]{3,10}$/,
  SKU: /^[A-Z0-9]{6,12}$/,
  SLUG: /^[a-z0-9\-]+$/,
} as const;

// Default values
export const DEFAULTS = {
  PRODUCT_IMAGE: '/images/default-product.jpg',
  USER_AVATAR: '/images/default-avatar.jpg',
  CURRENCY: 'USD',
  LANGUAGE: 'en',
  TIMEZONE: 'UTC',
} as const;