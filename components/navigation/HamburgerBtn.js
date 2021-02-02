export default function HamburgerBtn({ isOpen, clickFunc }) {
  const buttonState = isOpen ? 'open' : '';
  return (
    <button id='hamburger-btn' className='' onClick={() => clickFunc()}>
      <div className={buttonState}></div>
      <div className={buttonState}></div>
      <div className={buttonState}></div>
    </button>
  );
}
