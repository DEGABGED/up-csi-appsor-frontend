Rails.application.routes.draw do
  devise_for :admins, path: 'admin'

  namespace :api do
    resources :applicants, only: [:create]
    resources :committees, only: [:index, :show]
  end

  namespace :admin do
    resources :applicants
    resources :committees
  end

  # Replace with hosted page later on
  root to: "admin/applicants#index"
end
