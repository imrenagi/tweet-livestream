from tweepy.streaming import StreamListener

import os
import re

class TweetStreamListener(StreamListener):

    def on_status(self, status):
        print self.clean_tweet(status.text);

    def on_error(self, status_code):
        if status_code == 420:
            return False

    def clean_tweet(self, tweet):
        return ' '.join(re.sub("(@[A-Za-z0-9]+)|([^0-9A-Za-z \t])|(\w+:\/\/\S+)", " ", tweet).split())
