require "factory_girl"

FactoryGirl.define do
  factory :user do
    sequence(:email) { |n| "user#{n}@example.com" }
    sequence(:first_name) { |n| "Carmilla#{n}" }
    sequence(:handle) { |n| "user#{n}" }
    sequence(:last_name) { |n| "Karnstein#{n}" }
    sequence(:universally_unique_id) { |n| "Alpha#{n}Numeric" }
    password "password"
    password_confirmation "password"

    trait :confirmed do
      confirmed_at DateTime.now
    end

    factory :confirmed_user, traits: [:confirmed]
  end
end
