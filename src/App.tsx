import React, { useState } from 'react';
import { Brain, Lock, User, Globe, Send, Loader2 } from 'lucide-react';

interface FormData {
  username: string;
  password: string;
  instanceUrl: string;
  task: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
    instanceUrl: '',
    task: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    // Simulate API call for demo purposes
    setTimeout(() => {
      setResult(
        `Demo Response:\n\nAnalyzed task: "${formData.task}"\n\nSteps to implement:\n1. Connect to Salesforce instance\n2. Validate authentication\n3. Process task using AI\n4. Execute required changes\n\nNote: This is a frontend demo. In production, this would connect to actual Salesforce and OpenAI APIs.`
      );
      setIsLoading(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Brain className="w-10 h-10 text-indigo-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-800">Salesforce AI Assistant</h1>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <User className="w-4 h-4 mr-2" />
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <Lock className="w-4 h-4 mr-2" />
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <Globe className="w-4 h-4 mr-2" />
                    Instance URL
                  </label>
                  <input
                    type="url"
                    name="instanceUrl"
                    value={formData.instanceUrl}
                    onChange={handleChange}
                    placeholder="https://your-instance.salesforce.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <Send className="w-4 h-4 mr-2" />
                    Task Description
                  </label>
                  <textarea
                    name="task"
                    value={formData.task}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Describe what you want to do in Salesforce..."
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                    Processing...
                  </>
                ) : (
                  'Process Task'
                )}
              </button>
            </form>

            {result && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Result:</h3>
                <p className="text-gray-700 whitespace-pre-wrap">{result}</p>
              </div>
            )}
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>This is a demo frontend. For production use, deploy with backend services for Salesforce and OpenAI integration.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;