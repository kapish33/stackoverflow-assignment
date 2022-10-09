import LeftSideBar from '../LeftSideBar';
import RightSidebar from '../RightSidebar';
import TopBar from '../TopBar';

const Master = ({ children }) => {
  return (
    <div className='container mx-auto flex'>
      <LeftSideBar />
      <div className='grow'>
        <TopBar />

        <div className='flex'>
          <div className='grow'>{children}</div>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Master;
