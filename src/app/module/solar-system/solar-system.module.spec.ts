import { SolarSystemModule } from './solar-system.module';

describe('SolarSystemModule', () => {
  let solarSystemModule: SolarSystemModule;

  beforeEach(() => {
    solarSystemModule = new SolarSystemModule();
  });

  it('should create an instance', () => {
    expect(solarSystemModule).toBeTruthy();
  });
});
