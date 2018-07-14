Rails.application.routes.draw do
  devise_for :admins
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :applicants, except: [:new, :edit]
    resources :committees, except: [:new, :edit]
  end

  namespace :admin do
    resources :applicants
  end

  root to: "admin/applicants#index"
end
