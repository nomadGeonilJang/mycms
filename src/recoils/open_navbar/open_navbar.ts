import { atom, selector } from 'recoil';

const openNavbarState = atom({
  key: 'openNavbarState',
  default: false,
});

const getOpenNavbarValue = selector({
  key: 'getOpenNavbarValue',
  get: ({ get }) => {
    const open = get(openNavbarState);
    return !open;
  },
});

const openNavbar = {
  openNavbarState,
  getOpenNavbarValue,
};

export default openNavbar;
