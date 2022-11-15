import Close from "/assets/close.svg";
import MetaMaskLogo from "/assets/metamask.svg";
import WalletConnect from "/assets/wallet-connect.svg";
import Caret from "/assets/caret.svg";

export default function Modal({setModalOpen}) {
  return (
    <section className="fixed flex justify-center items-center w-screen h-screen bg-[rgba(0,0,0,0.56)] inset-0">
      <div className="bg-white mx-auto w-[90%] md:w-[600px] rounded-lg">
        <div className="mt-6 flex justify-between border-b-2 text-2xl font-bold pb-6 px-8">
          <h5>Connect Wallet</h5>

          <button onClick={() => setModalOpen(false)}>
            <img src={Close} alt="close" />
          </button>
        </div>

        <p className="ml-8 mt-8">Choose your preferred wallet:</p>

        <div className="px-8 mt-4 space-y-4 mb-8">
          <div className="bg-[#F8F9FA] flex justify-between py-3 px-5 border-2 rounded-xl">
            <div className="flex items-center text-xl font-bold space-x-4">
              <img src={MetaMaskLogo} alt="metamask" />
              <p>Metamask</p>
            </div>

            <img src={Caret} alt="caret" />
          </div>

          <div className="bg-[#F8F9FA] flex justify-between py-3 px-5 border-2 rounded-xl">
            <div className="flex items-center text-xl font-bold space-x-4">
              <img src={WalletConnect} alt="wallet connect" />
              <p>Wallet connect</p>
            </div>

            <img src={Caret} alt="caret" />
          </div>
        </div>
      </div>
    </section>
  );
}
