import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../../config';
import { resolveImagePath } from '../../utils/resolvePath';

const ItemModal = ({ isOpen, onClose, onSave, item, category }) => {
  const [formData, setFormData] = useState({});
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (item) {
      setFormData({ ...item });
    } else {
      if (category === 'projects') {
        setFormData({
          name: '',
          workType: '',
          type: '',
          date: new Date().getFullYear().toString(),
          square: '',
          place: '',
          status: 'В процессе',
          team: '',
          description: '',
          plane: '',
          images: []
        });
      } else {
        setFormData({ name: '', description: '', img: '' });
      }
    }
  }, [item, isOpen, category]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      // If pressing Enter, only submit if not in a textarea
      if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
        // Prevent default only if we're actually submitting
        // If they are in an input, the form will submit anyway, but this ensures it works globally
        onSave(formData);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onSave, onClose, formData]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = async (e, callback) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      try {
        setIsUploading(true);
        const response = await axios.post(`${API_URL}/api/upload`, {
          image: reader.result,
          name: file.name
        });
        callback(response.data.url);
      } catch (err) {
        console.error("Upload error:", err);
        alert("Failed to upload image. Ensure the server is running.");
      } finally {
        setIsUploading(false);
      }
    };
  };

  const handleImageChange = (index, field, value) => {
    const newImages = [...(formData.images || [])];
    newImages[index] = { ...newImages[index], [field]: value };
    setFormData(prev => ({ ...prev, images: newImages }));
  };

  const addImage = () => {
    const newImages = [...(formData.images || [])];
    newImages.push({ id: Date.now(), img: '' });
    setFormData(prev => ({ ...prev, images: newImages }));
  };

  const removeImage = (index) => {
    const newImages = [...(formData.images || [])];
    newImages.splice(index, 1);
    setFormData(prev => ({ ...prev, images: newImages }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity" onClick={onClose} />
      
      <div className="relative bg-[#1A1C23] border border-gray-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl transform transition-all animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center px-8 py-6 sticky top-0 bg-[#1A1C23]/80 backdrop-blur-xl z-[60] border-b border-gray-800">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight capitalize">
              {item ? 'Edit' : 'Create New'} {category ? category.replace(/ies$/, 'y').replace(/s$/, '') : 'Item'}
            </h2>
            <p className="text-gray-400 text-sm mt-1 uppercase tracking-wider">{category}</p>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

          {isUploading && (
            <div className="absolute inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-white font-medium">Uploading image...</p>
              </div>
            </div>
          )}

        <form onSubmit={handleSubmit} className="space-y-8 p-8 pt-6">
          {category === 'projects' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 ml-1">Project Name</label>
                  <input type="text" name="name" value={formData.name || ''} onChange={handleChange} required className="w-full bg-[#0F1115] border border-gray-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 ml-1">Type / Work Type</label>
                  <input type="text" name="type" value={formData.type || ''} onChange={handleChange} className="w-full bg-[#0F1115] border border-gray-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 ml-1">Year</label>
                    <input type="text" name="date" value={formData.date || ''} onChange={handleChange} className="w-full bg-[#0F1115] border border-gray-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 ml-1">Square</label>
                    <input type="text" name="square" value={formData.square || ''} onChange={handleChange} className="w-full bg-[#0F1115] border border-gray-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 ml-1">Place</label>
                  <input type="text" name="place" value={formData.place || ''} onChange={handleChange} className="w-full bg-[#0F1115] border border-gray-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500" />
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 ml-1">Status</label>
                  <select name="status" value={formData.status || ''} onChange={handleChange} className="w-full bg-[#0F1115] border border-gray-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 appearance-none cursor-pointer">
                    <option value="Реализован">Реализован</option>
                    <option value="В процессе">В процессе</option>
                    <option value="Проект">Проект</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 ml-1">Team</label>
                  <input type="text" name="team" value={formData.team || ''} onChange={handleChange} className="w-full bg-[#0F1115] border border-gray-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 ml-1">Plane Image (URL or Upload)</label>
                  <div className="flex gap-2">
                    <input type="text" name="plane" value={formData.plane || ''} onChange={handleChange} className="flex-grow bg-[#0F1115] border border-gray-700 text-white rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500" placeholder="URL" />
                    <label className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-xl transition-all">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                      <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, (url) => setFormData(prev => ({ ...prev, plane: url })))} />
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 ml-1">Description</label>
                  <textarea name="description" value={formData.description || ''} onChange={handleChange} rows="2" className="w-full bg-[#0F1115] border border-gray-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 resize-none" />
                </div>
              </div>

              <div className="col-span-full border-t border-gray-800 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-white">Project Images</h3>
                  <button type="button" onClick={addImage} className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-400 bg-indigo-500/10 hover:bg-indigo-500/20 rounded-xl transition-all">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    Add Image
                  </button>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {(formData.images || []).map((imgObj, idx) => (
                    <div key={imgObj.id || idx} className="flex gap-3 items-center bg-black/20 p-3 rounded-2xl border border-gray-800/40">
                      <div className="flex-grow flex gap-2">
                        <input 
                          type="text" 
                          value={imgObj.img || ''} 
                          onChange={(e) => handleImageChange(idx, 'img', e.target.value)}
                          className="flex-grow bg-[#0F1115] border border-gray-700 text-white rounded-xl px-4 py-2 text-sm focus:ring-1 focus:ring-indigo-500"
                          placeholder="Image URL" 
                        />
                        <label className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-xl transition-all">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                          <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, (url) => handleImageChange(idx, 'img', url))} />
                        </label>
                      </div>
                      {imgObj.img && (
                        <div className="w-20 h-20 rounded-xl overflow-hidden border border-gray-700 flex-shrink-0 bg-black/40 shadow-lg">
                          <img 
                            src={resolveImagePath(imgObj.img)} 
                            alt="Preview" 
                            className="w-full h-full object-cover" 
                            onError={(e) => { e.target.src = 'https://via.placeholder.com/150x150?text=Error'; }}
                          />
                        </div>
                      )}
                      <button type="button" onClick={() => removeImage(idx)} className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {category === 'sliders' ? (
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 ml-1">Slider Image (URL or Upload)</label>
                  <div className="flex gap-2">
                    <input type="text" name="img" value={formData.img || ''} onChange={handleChange} className="flex-grow bg-[#0F1115] border border-gray-700 text-white rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500" placeholder="URL" />
                    <label className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-xl transition-all">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                      <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, (url) => setFormData(prev => ({ ...prev, img: url })))} />
                    </label>
                  </div>
                  {formData.img && (
                    <div className="mt-4 w-full h-48 rounded-xl overflow-hidden border border-gray-700 bg-black/20">
                      <img src={resolveImagePath(formData.img)} alt="Preview" className="w-full h-full object-contain" />
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 ml-1">Name</label>
                    <input type="text" name="name" value={formData.name || ''} onChange={handleChange} required className="w-full bg-[#0F1115] border border-gray-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 ml-1">Description / Value</label>
                    <textarea name="description" value={formData.description || ''} onChange={handleChange} rows="4" className="w-full bg-[#0F1115] border border-gray-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  {category === 'services' && (
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 ml-1">Image (URL or Upload)</label>
                      <div className="flex gap-2">
                        <input type="text" name="img" value={formData.img || ''} onChange={handleChange} className="flex-grow bg-[#0F1115] border border-gray-700 text-white rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500" placeholder="URL" />
                        <label className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-xl transition-all">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                          <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, (url) => setFormData(prev => ({ ...prev, img: url })))} />
                        </label>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          <div className="flex justify-end gap-4 mt-12 border-t border-gray-800 pt-8">
            <button type="button" onClick={onClose} className="px-6 py-3 rounded-xl text-sm font-semibold text-gray-400 hover:text-white hover:bg-white/5 transition-all">Cancel</button>
            <button type="submit" disabled={isUploading} className={`px-8 py-3 rounded-xl text-sm font-bold text-white transition-all active:scale-95 ${isUploading ? 'bg-gray-700 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 shadow-xl shadow-indigo-500/20'}`}>
              {item ? 'Save Changes' : 'Create Item'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemModal;
