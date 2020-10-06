import Vue from 'vue';
import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import Component from './Component.vue';

Vue.use(Vuetify);

const vuetify = new Vuetify({});

describe('Component', () => {
  let localVue;
  let wrapper;

  describe('When the component is mounted', () => {
    beforeEach(() => {
      localVue = createLocalVue();
      localVue.use(Vuetify);

      wrapper = mount(Component, {
        localVue,
        vuetify,
      });
    });

    it('Then props should be returned for a v-button Vue instance', async () => {
      const submitButtonWrapper = wrapper.find('#submitButton');

      // Works as expected, v-button is a Vue instance and so I should be able to get
      // the props
      expect(submitButtonWrapper.props()).toBeDefined();
    });

    it('Then props should be returned for a v-text-field Vue instance', async () => {
      const emailTextFieldWrapper = wrapper.find('#emailTextField');

      // Test crashes when attempting to get props from v-text-field, unlike v-button
      // which handles getting props as expected.
      expect(emailTextFieldWrapper.props()).toBeDefined();
    });
  });
});
