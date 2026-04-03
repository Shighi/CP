declare module "canvas-confetti" {
  type Options = {
    particleCount?: number;
    angle?: number;
    spread?: number;
    startVelocity?: number;
    decay?: number;
    gravity?: number;
    drift?: number;
    ticks?: number;
    origin?: { x?: number; y?: number };
    colors?: string[];
    shapes?: string[];
    scalar?: number;
    zIndex?: number;
    disableForReducedMotion?: boolean;
  };

  type GlobalOptions = {
    resize?: boolean;
    useWorker?: boolean;
  };

  type ConfettiInstance = ((options?: Options) => unknown) & {
    reset: () => void;
  };

  type ConfettiExport = ConfettiInstance & {
    create: (
      canvas?: HTMLCanvasElement | null,
      options?: GlobalOptions
    ) => ConfettiInstance;
    reset: () => void;
  };

  const confetti: ConfettiExport;
  export default confetti;
}

