import { TestBed } from '@angular/core/testing';

import { SocketServiceSetupResolverService } from './socket-service-setup-resolver.service';

describe('SocketServiceSetupResolverService', () => {
  let service: SocketServiceSetupResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketServiceSetupResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
