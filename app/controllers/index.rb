get '/' do
  erb :index
end

post '/tweet' do
  @msg = params['message']
  Twitter.update(@msg)

  erb :_confirm
end
