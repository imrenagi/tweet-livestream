from tweepy.streaming import StreamListener
from textblob import TextBlob
import redis

import os
import re

r = redis.client.StrictRedis(host='redis')

class TweetStreamListener(StreamListener):

    # def __init__(self, outChannel):
    #   self.outChannel = outChannel

    def on_status(self, status):
        sentiment = self.get_tweet_sentiment(status.text)
        r.publish('tweet', sentiment)

    def get_tweet_sentiment(self, tweet):
        '''
        Utility function to classify sentiment of passed tweet
        using textblob's sentiment method
        '''
        # create TextBlob object of passed tweet text
        analysis = TextBlob(self.clean_tweet(tweet))
        # set sentiment
        if analysis.sentiment.polarity > 0:
            return 'positive'
        elif analysis.sentiment.polarity == 0:
            return 'neutral'
        else:
            return 'negative'

    def on_error(self, status_code):
        if status_code == 420:
            return False

    def clean_tweet(self, tweet):
        return ' '.join(re.sub("(@[A-Za-z0-9]+)|([^0-9A-Za-z \t])|(\w+:\/\/\S+)", " ", tweet).split())
