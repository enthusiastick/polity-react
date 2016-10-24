require "factory_girl"

FactoryGirl.define do
  factory :oauth_token, class: Doorkeeper::AccessToken do
    association :application, factory: :oauth_application
  end
end
