module ApplicationHelper
  def serialize(template, options = {})
    JBuilderTemplate
      .new(self) { |json| json.partial! template, options }.attriubtes!
  end
end
