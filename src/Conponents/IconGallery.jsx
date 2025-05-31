import React, { useEffect, useState } from 'react';

const modules = import.meta.glob('../customicons/*.jsx', { eager: true });

const IconGallery = () => {
  const [icons, setIcons] = useState({});
  const [copied, setCopied] = useState('');

  useEffect(() => {
    const loadedIcons = {};
    for (const path in modules) {
      const name = path.split('/').pop().replace('.jsx', '');
      loadedIcons[name] = modules[path].default;
    }
    setIcons(loadedIcons);
  }, []);

  const handleCopy = (name) => {
    navigator.clipboard.writeText(name);
    setCopied(name);
    setTimeout(() => setCopied(''), 1000);
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {Object.entries(icons).map(([name, Icon]) => (
        <div
          key={name}
          onClick={() => handleCopy(name)}
          className="flex flex-col items-center cursor-pointer hover:bg-gray-100 p-2 rounded relative"
        >
          <Icon className="w-8 h-8 mb-2" />
          <span className="text-sm text-center">{name}</span>
          {copied === name && (
            <span className="absolute top-0 right-0 bg-green-500 text-white text-xs px-1 rounded">
              Copied
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default IconGallery;
