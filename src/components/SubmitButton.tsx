import { CheckCircle } from "lucide-react";

interface SubmitButtonProps {
  loading: boolean;
}

const SubmitButton = ({ loading }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full py-3 px-4 rounded-md bg-primary text-white font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
    >
      {loading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Verificando...
        </>
      ) : (
        <>
          <CheckCircle className="mr-2 h-5 w-5" />
          Verificar Cartão
        </>
      )}
    </button>
  );
};

export default SubmitButton;
