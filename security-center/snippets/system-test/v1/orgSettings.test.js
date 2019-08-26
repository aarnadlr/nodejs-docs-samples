// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const {assert} = require('chai');
const {execSync} = require('child_process');
const exec = cmd => execSync(cmd, {encoding: 'utf8'});

const organizationId = process.env['GCLOUD_ORGANIZATION'];

describe('client with organization settings', () => {
  it('client can enable asset discovery', () => {
    const output = exec(`node v1/enableAssetDiscovery.js ${organizationId}`);
    assert.match(output, new RegExp(organizationId));
    assert.match(output, /true/);
    assert.notMatch(output, /undefined/);
  });

  it('client can get organization settings', () => {
    const output = exec(`node v1/getOrganizationSettings.js ${organizationId}`);
    assert.match(output, new RegExp(organizationId));
  });
});
