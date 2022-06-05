export const menuClassItems = (className, currentPath) => {
  if (className == currentPath) return 'menu-items select-item';
  return 'menu-items';
};
