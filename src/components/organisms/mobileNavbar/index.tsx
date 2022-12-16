import { Menu } from '@mui/icons-material';
import { useAppContext } from '../../../context/useContext';
import { Sidebar } from '../../molecules';

const MobileNavbar = () => {
  const { setOpenSidebar } = useAppContext();

  const handleOpenSidebar = () => {
    setOpenSidebar((prev: boolean) => !prev);
  };

  return (
    <div>
      <Sidebar />
      <div className="flex flex-grow justify-between items-center p-10">
        <Menu fontSize="large" onClick={handleOpenSidebar} />
        <h1>Icons</h1>
      </div>
    </div>
  );
};

export default MobileNavbar;
