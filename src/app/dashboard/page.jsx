export default function Dashboard() {
  return (
    <div className="h-[88%] border-2 border-red-600">
      <div className="md:hidden block text-lg font-semibold m-8">
        Upload CSV
      </div>
      <div className="w-[85%] h-2/5 mt-0 md:mt-8 md:w-1/2 md:h-3/5 rounded-2xl border-2 border-green-600 bg-white m-auto flex flex-col justify-center items-center gap-5">
        <label
          htmlFor="fileInput"
          className="border-2 border-dashed w-[88%] h-3/5 rounded-2xl flex justify-center items-center text-text_secondary"
        >
          <input id="fileInput" type="file" className="hidden" />
          Upload Your Excel Sheet{" "}
          <button className="text-backgroud_purple ms-2">here</button>
        </label>
        <label
          htmlFor="fileInput"
          className="w-[90%] text-center p-4 bg-backgroud_purple hover:bg-indigo-300d text-white font rounded-xl cursor-pointer"
        >
          Upload
        </label>
      </div>
    </div>
  );
}
