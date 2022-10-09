import Cart from '../../assets/cart.png';
export const Links = [
  {
    name: 'Products',
    path: '/',
    visibilityAllowded: ['/', '/cart'],
    varient: 'link',
  },
  {
    name: 'Shopping Cart',
    path: '/cart',
    visibilityAllowded: ['/cart'],
    varient: 'link',
  },
  {
    url: Cart,
    path: '/cart',
    visibilityAllowded: ['/'],
    varient: 'image',
  },
];
