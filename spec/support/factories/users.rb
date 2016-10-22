require "factory_girl"

FactoryGirl.define do
  factory :user do
    sequence(:email) { |n| "user#{n}@example.com" }
    sequence(:first_name) { |n| "Carmilla#{n}" }
    sequence(:handle) { |n| "user#{n}" }
    sequence(:identifier) { |n| "Alpha#{n}Numeric" }
    sequence(:last_name) { |n| "Karnstein#{n}" }
  end
end
