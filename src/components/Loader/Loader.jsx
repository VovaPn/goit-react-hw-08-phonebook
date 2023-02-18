import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 40,
        color: '#1976d2',
      }}
    >
      <Oval
        height={80}
        width={80}
        color="#1976d2"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#1976d2"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};
