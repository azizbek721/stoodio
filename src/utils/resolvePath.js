import API_URL from '../config';

export const resolveImagePath = (path) => {
    if (!path) return 'https://via.placeholder.com/800x600?text=No+Image';

    // If the path contains "/uploads/", extract just the filename and use the current API_URL
    // This fixes cases where the DB has a hardcoded domain (like localhost or an old Render URL)
    if (typeof path === 'string' && path.includes('/uploads/')) {
        const fileName = path.split('/uploads/').pop();
        return `${API_URL}/uploads/${fileName}`;
    }

    // If it's already a full URL or a base64 string
    if (typeof path === 'string' && (path.startsWith('http') || path.startsWith('data:image'))) return path;

    // Try to resolve from local assets folder
    // Note: require() doesn't work well in a standalone utility like this without more context,
    // so we'll focus on handling API/Cloudinary URLs here.
    
    // Fallback for relative paths served by the backend
    if (typeof path === 'string' && (path.includes('/') || path.includes('.'))) {
        const cleanPath = path.startsWith('/') ? path.slice(1) : path;
        return `${API_URL}/uploads/${cleanPath}`;
    }

    return 'https://via.placeholder.com/800x600?text=Image+Not+Found';
};
