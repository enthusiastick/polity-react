Rails.application.routes.draw do
  root "pages#index"

  get "sign-in", to: "sessions#new", as: :sign_in
  delete "sign-out", to: "sessions#destroy"
  get "sign-up", to: "users#new", as: :sign_up

  namespace :api do
    namespace :v1 do
      get "me", to: "users#show"
      resources :password_resets, only: [:create, :update]
      resources :sessions, only: [:create]
      resources :users, only: [:create] do
        collection do
          resources :current, only: :index
        end
      end
    end
  end

  resources :account_confirmations, only: [:edit]
  resources :password_resets, only: [:edit, :new]
  resources :users, only: [:edit, :update]

  use_doorkeeper
end
