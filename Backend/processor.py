from google.cloud import language
from google.cloud.language import enums, types

EDGY_THRESHOLD = -0.5


def process(content):
    client = language.LanguageServiceClient()

    document = types.Document(
        content=content, type=enums.Document.Type.PLAIN_TEXT)
    annotations = client.analyze_sentiment(document=document)

    if (annotations.document_sentiment.score <= EDGY_THRESHOLD):
        return "TOO EDGY"
    else:
        return "NOT EDGY ENOUGH"
