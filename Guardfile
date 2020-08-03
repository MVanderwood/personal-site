guard :rspec, cmd: "bundle exec rspec" do
  watch("spec/spec_helper.rb")  { "spec" }
  watch("spec/rails_helper.rb") { "spec" }

  watch(%r{^spec/.+_spec\.rb$})

  watch(%r{^lib/(.+)\.rb$}) { |m| "spec/lib/#{m[1]}_spec.rb$"}

  watch("app/controllers/application_controller.rb")  { ["spec/requests"] }

  watch(%r{^app/controllers/(.+)_controller.rb$})          { |m| "spec/requests/#{m[1]}_request_spec.rb" }
  # watch(%r{^app/controllers/api/(.+)/(.+)_controller.rb$}) { |m| "spec/requests/api/#{m[1]}/#{m[2]}_controller_spec.rb" }
  # watch(%r{^app/views/api/(.+)/(.+)/(.+).html.erb$})       { |m| "spec/requests/api/#{m[1]}/#{m[2]}_controller_spec.rb" }

  watch(%r{^app/(.+).rb$}) { |m| "spec/#{m[1]}_spec.rb"}
end
