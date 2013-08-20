get '/' do
  erb :index
end

post '/get_tweets' do
  @user = User.find_or_create_by_screen_name(params[:screen_name])
  erb :_user, layout: false
end

get '/tweet' do
  erb :tweet
end

post '/tweet' do
  @msg = params[:tweet]
  erb :_success, layout: false
end
