import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../config';
import ItemModal from './ItemModal';
import DeleteConfirmModal from './DeleteConfirmModal';
import { resolveImagePath } from '../../utils/resolvePath';

const CATEGORIES = [
  { id: 'advantages', label: 'Advantages' },
  { id: 'sliders', label: 'Sliders' },
  { id: 'projects', label: 'Projects' },
  { id: 'steps', label: 'Steps' },
  { id: 'services', label: 'Services' },
  { id: 'vacancies', label: 'Vacancies' }
];

const AdminPanel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  const [currentCategory, setCurrentCategory] = useState(CATEGORIES[0].id);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const getApiUrl = useCallback(() => `${API_URL}/api/${currentCategory}`, [currentCategory]);

  // Fetch Items
  const fetchItems = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(getApiUrl());
      setItems(response.data);
      setError(null);
    } catch (err) {
      console.error(`Error fetching ${currentCategory}:`, err);
      setError("Failed to load data. Please ensure the backend server is running.");
    } finally {
      setLoading(false);
    }
  }, [getApiUrl, currentCategory]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  // Handle Delete Initiation
  const handleDelete = (item) => {
    setItemToDelete(item);
    setIsDeleteModalOpen(true);
  };

  // Actual Delete Confirmation
  const confirmDelete = async () => {
    if (!itemToDelete) return;
    try {
      await axios.delete(`${getApiUrl()}/${itemToDelete.id}`);
      setItems(prevItems => prevItems.filter(item => item.id !== itemToDelete.id));
      setIsDeleteModalOpen(false);
      setItemToDelete(null);
    } catch (err) {
      console.error("Error deleting item:", err);
      alert("Failed to delete item.");
    }
  };

  // Handle Save (Create or Update)
  const handleSave = async (formData) => {
    try {
      if (selectedItem) {
        // Update
        const response = await axios.put(`${getApiUrl()}/${selectedItem.id}`, formData);
        setItems(prevItems => prevItems.map(item => item.id === selectedItem.id ? response.data : item));
      } else {
        // Create
        const response = await axios.post(getApiUrl(), formData);
        setItems(prevItems => [...prevItems, response.data]);
      }
      setIsModalOpen(false);
      setSelectedItem(null);
    } catch (err) {
      console.error("Error saving item:", err);
      alert("Failed to save item.");
    }
  };

  const openCreateModal = () => {
    setSelectedItem(null);
    setIsModalOpen(true);
  };

  const openEditModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0F1115] text-gray-200 font-sans selection:bg-indigo-500/30 w-full pt-20 flex">

      {/* Sidebar Navigation */}
      <aside className="w-64 bg-[#1A1C23] border-r border-gray-800/60 hidden md:flex flex-col flex-shrink-0">
        <div className="p-6 border-b border-gray-800/60">
          <h2 className="text-xl font-bold text-white tracking-tight">Admin Menu</h2>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {CATEGORIES.map(category => (
              <li key={category.id}>
                <button
                  onClick={() => setCurrentCategory(category.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 font-medium ${currentCategory === category.id
                      ? 'bg-indigo-500/10 text-indigo-400'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                    }`}
                >
                  <span className={`w-2 h-2 rounded-full ${currentCategory === category.id ? 'bg-indigo-500' : 'bg-transparent'}`}></span>
                  {category.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Mobile Navigation (Visible only on small screens) */}
        <div className="md:hidden border-b border-gray-800/60 bg-[#1A1C23] p-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => setCurrentCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${currentCategory === category.id
                    ? 'bg-indigo-500 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">

          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3 capitalize">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </span>
                {CATEGORIES.find(c => c.id === currentCategory)?.label || currentCategory}
              </h1>
              <p className="mt-2 text-sm text-gray-400">Manage your {currentCategory} records.</p>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={openCreateModal}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 ease-in-out active:scale-95 whitespace-nowrap"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <svg className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>Create New Item</span>
              </button>

              <button
                onClick={() => {
                  localStorage.removeItem('isAdminLoggedIn');
                  navigate('/login');
                }}
                className="inline-flex items-center justify-center p-2.5 text-gray-400 hover:text-white bg-white/5 border border-white/10 rounded-full hover:bg-red-500/10 hover:border-red-500/20 transition-all duration-300"
                title="Logout"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </div>

          {/* Content Section */}
          {error ? (
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 text-center">
              <svg className="w-12 h-12 text-red-500 mx-auto mb-4 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-red-400 font-medium">{error}</p>
            </div>
          ) : (
            <div className="bg-[#1A1C23] border border-gray-800/60 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    {currentCategory === 'projects' ? (
                      <tr className="bg-white/[0.02] border-b border-gray-800 text-xs uppercase tracking-wider text-gray-400">
                        <th className="px-6 py-4 font-medium">ID</th>
                        <th className="px-6 py-4 font-medium">Image</th>
                        <th className="px-6 py-4 font-medium">Name</th>
                        <th className="px-6 py-4 font-medium">Type</th>
                        <th className="px-6 py-4 font-medium">Place</th>
                        <th className="px-6 py-4 font-medium">Status</th>
                        <th className="px-6 py-4 font-medium text-right">Actions</th>
                      </tr>
                    ) : currentCategory === 'sliders' ? (
                      <tr className="bg-white/[0.02] border-b border-gray-800 text-xs uppercase tracking-wider text-gray-400">
                        <th className="px-6 py-4 font-medium">ID</th>
                        <th className="px-6 py-4 font-medium">Image</th>
                        <th className="px-6 py-4 font-medium text-right">Actions</th>
                      </tr>
                    ) : (
                      <tr className="bg-white/[0.02] border-b border-gray-800 text-xs uppercase tracking-wider text-gray-400">
                        <th className="px-6 py-4 font-medium">ID</th>
                        <th className="px-6 py-4 font-medium">Name</th>
                        <th className="px-6 py-4 font-medium">Description</th>
                        <th className="px-6 py-4 font-medium text-right">Actions</th>
                      </tr>
                    )}
                  </thead>
                  <tbody className="divide-y divide-gray-800/60">
                    {loading ? (
                      <tr>
                        <td colSpan="4" className="px-6 py-12 text-center text-gray-500">
                          <div className="flex flex-col items-center justify-center gap-3">
                            <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                            Loading data...
                          </div>
                        </td>
                      </tr>
                    ) : items.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="px-6 py-12 text-center text-gray-500">
                          <div className="flex flex-col items-center justify-center gap-3">
                            <svg className="w-12 h-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                            No items found in {currentCategory}. Create one to get started!
                          </div>
                        </td>
                      </tr>
                    ) : (
                      items.map((item, index) => (
                        <tr key={item.id} className="hover:bg-white/[0.02] transition-colors group">
                          {currentCategory === 'projects' ? (
                            <>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
                                {index + 1}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="w-20 h-14 rounded-xl overflow-hidden border border-gray-800 bg-black/40 shadow-inner group/img transition-all duration-300 hover:scale-110 hover:shadow-indigo-500/20 hover:border-indigo-500/50">
                                  <img 
                                    src={resolveImagePath((item.images && item.images[0] && item.images[0].img))} 
                                    alt="Preview" 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/150x100?text=Error+Loading'; }}
                                  />
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">
                                {item.name || item.title}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                {item.type || item.workType}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                {item.place}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                <span className={`px-2 py-1 rounded-full text-xs ${item.status === 'Реализован' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
                                  {item.status}
                                </span>
                              </td>
                            </>
                          ) : currentCategory === 'sliders' ? (
                            <>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
                                {index + 1}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="w-24 h-14 rounded-xl overflow-hidden border border-gray-800 bg-black/40 shadow-inner group/img transition-all duration-300 hover:scale-110 hover:shadow-indigo-500/20 hover:border-indigo-500/50">
                                  <img 
                                    src={resolveImagePath(item.img)} 
                                    alt="Slider Preview" 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/150x100?text=Error+Loading'; }}
                                  />
                                </div>
                              </td>
                            </>
                          ) : (
                            <>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
                                {index + 1}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">
                                {item.name || item.title}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-400 max-w-md truncate">
                                {item.description || <span className="italic text-gray-600">No description</span>}
                              </td>
                            </>
                          )}
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              {currentCategory === 'projects' && (
                                <button
                                  onClick={() => window.open(`/portfolio/${item.id}`, '_blank')}
                                  className="p-2 text-gray-400 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-all"
                                  title="View Public Page"
                                >
                                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </button>
                              )}
                              <button
                                onClick={() => openEditModal(item)}
                                className="p-2 text-gray-400 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition-all"
                                title="Edit"
                              >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                              </button>
                              <button
                                onClick={() => handleDelete(item)}
                                className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
                                title="Delete"
                              >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>

      <ItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        item={selectedItem}
        category={currentCategory}
      />

      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        itemName={itemToDelete?.name || itemToDelete?.title || `this ${currentCategory.slice(0, -1)}`}
      />
    </div>
  );
};

export default AdminPanel;
